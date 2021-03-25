class CreditInteface{
    constructor(){
        this.credits = 0;
    }

    addCredits(credits){
        this.credits += credits;
    }

    removeCredits(credits){
        this.credits -= credits;
    }

    cashOut(){

    }

    getEarningsHistory(){

    }

    saveCreditsLocally(){

    }
}

export default new CreditInteface();