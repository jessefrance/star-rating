window.addEventListener("DOMContentLoaded",() => {
	const starRating = new StarRating("form");
});

class StarRating {
    
    constructor(qs) {
        this.ratings = [
            {id: 1, name: "Terrible"};
            {id: 2, name: "Bad"};
            {id: 3, name: "Ok"};
            {id: 4, name: "Good"};
            {id: 5, name: "Exellent"};
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

    
}