class book {
    constructor(
        title,
        author,
        year,
        rating,       
    )
    {
        this.title=title,
        this.author=author,
        this.year=year,
        this.rating=rating
    }
    recommend(){
        if (this.rating>3){
            return true;
        }
        else
        return false;
    }
    changeRating(r){
        this.rating=r;
    }

}

export default book;