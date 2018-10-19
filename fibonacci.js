var fibArr = new Array();


var yourself = {
    fibonacci : function(n) {

        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            if(fibArr[n]){
                return fibArr[n];
            }
            fibArr[n] =  this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
            return fibArr[n];
        }
    }
};
