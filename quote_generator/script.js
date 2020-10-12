(function() {
    const quotes = [
        {
            quote: "The only mystery in life is why the kamikaze pilots wore helmets.",
            author: "Al McGuire"
        },
        {
            quote: "The difference between stupidity and genius is that genius has its limits.",
            author: "Albert Einstein"
        },
        {
            quote: "Political correctness is tyranny with manners.",
            author: "Charlton Heston"
        },
        {
            quote: "They say marriages are made in Heaven. But so is thunder and lightning.",
            author: "Clint Eastwood"
        },
        {
            quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
            author: "Dalai Lama"
        },
        {
            quote: "The duty of a patriot is to protect his country from its government.",
            author: "Edward Abbey"
        },
        {
            quote: "An alcoholic is someone you don’t like who drinks as much as you do.",
            author: "Dylan Thomas"
        },
        {
            quote: "Do not take life too seriously. You will never get out of it alive.",
            author: "Elbert Hubbard"
        },
        {
            quote: "A computer once beat me at chess, but it was no match for me at kick boxing.",
            author: "Emo Phillips"
        },
        {
            quote: "Whoever said money can’t buy happiness didn’t know where to shop.",
            author: "Gertrude Stein"
        },
        {
            quote: "Avoid fruits and nuts. You are what you eat.",
            author: "Jim Davis"
        }
    ];
    const btn = document.getElementById("generate-btn");

    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });
})();