const articles = {
    "1": {
        "title": "Campo magnético creado por una carga móvil",
        "article": "<h2>Campo magnético creado por un carga móvil en un conductor</h2>\
        <p>Las líneas del campo magnético de una carga en movimiento son circunferencias en torno al movimiento de la carga, ya que el campo va en la dirección acimutal. En los puntos del eje el campo magnético es nulo, excepto en la carga.</p>\
        <h2>Campo magnetico creado por una carga móvil en una espira</h2>\
        <p>Los campos magnéticos pueden ser generados por cargas en movimiento. Tan solo una carga en movimiento puede crear un campo magnético. Su sentido va a depender de la <b>regla de la mano derecha</b>.</p>\
        <p>a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a </p>",
        "formulas": "<h2>Fórmulas</h2>\
        <h3>En un conductor<h3>\
        <p>$B = frac{mu_0*I}{2pi*d}$</p>"
    },

    "2": {
        "title": "2",
        "article": "test",
        "formulas": "<p> $R=frac {V} {I}$ </p>"
    }
};

reload = function(){};

document.addEventListener("DOMContentLoaded", () => {
    reload = async function (){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        let article = urlParams.get("id");
        let mainContainer = document.getElementById("mainContainer");
        let articleContainer = document.getElementById("article-container");

        if(article === null){
            continueToMain();
        }
        else{
            getArticle(article);
        }

        function continueToMain(){
            mainContainer.classList.remove("hidden");
            articleContainer.classList.add("hidden");
        }

        async function getArticle(id){
            mainContainer.classList.add("hidden");
            articleContainer.classList.remove("hidden");

            let title = document.getElementById("title");
            let article = document.getElementById("article");
            let formulas = document.getElementById("formulas");
            
            title.innerHTML = articles[id].title;
            article.innerHTML = articles[id].article;
            formulas.innerHTML = articles[id].formulas;
            
            try{
                MathJax.startup.document.state(0);
                MathJax.typeset();
            }
            catch (e){
                console.log(e);
            }
        }
    }
    reload();

    backButton = document.getElementById("back");
    backButton.addEventListener("click", () => {
        location.search="";
    });
});

function updateArticle(article){
    window.location.search = "id=" + article;
    reload(article);
}