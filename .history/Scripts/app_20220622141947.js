//ITFE --Immediately invoked function expression
//aka anonymous self-executing function

(function()
{

        function Start()
        {
            console.log("App Started")
        }

        window.addEventListener("load",Start)

})();