window.addEventListener("DOMContentLoaded",() => {
	const starRating = new StarRating("form");
});

class StarRating {
    
    constructor(qs) {
        this.ratings = [
            {id: 1, name: "Terrible"},
            {id: 2, name: "Bad"},
            {id: 3, name: "Ok"},
            {id: 4, name: "Good"},
            {id: 5, name: "Exellent"},
        ];

        this.rating = null;
        
        this.el = document.querySelector (qs);

        this.init ();
    }

    init() {
        this.el?.addEventListener("change",this.updateRating.bind(this));

        try {
			this.el?.reset();
		} catch (err) {
			console.error("Element isn’t a form.");
		}
    }

    updateRating(e) {

        Array.from(this.el.querySelector (`[for*="rating"]`)).forEach(el=> {
            el.className = "rating__label";
        })

        const ratingObject = this.ratings.find(r => r.id === +e.target.value);
		const prevRatingID = this.rating?.id || 0;

        let delay = 0;
		this.rating = ratingObject;
		this.ratings.forEach(rating => {
			const { id } = rating;

            const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

			if (id > prevRatingID + 1 && id <= this.rating.id) {
				++delay;
				ratingLabel.classList.add(`rating__label--delay${delay}`);
			} 
            const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

			if (this.rating.id !== id)
				ratingTextEl.setAttribute("hidden",true);
			else
				ratingTextEl.removeAttribute("hidden");
        });
    }
}