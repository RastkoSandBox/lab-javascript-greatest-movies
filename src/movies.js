


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
    let directors = []
    // map prima fju koju cemo izvrsiti nad svakim elementom niza
    array.map((movie) => {
        // console.log(movie.director, movie.year, movie.duration)
        // console.log(movie.director, directors.includes(movie.director))
        if (!directors.includes(movie.director)) {
            directors.push(movie.director)
        }
    })
    // console.log(directors)
    return directors
}
let dir = getAllDirectors(movies)
console.log(dir)


let arrayB = [1, 2, 3]
let novi = arrayB.map(a => a * 2)
console.log(novi)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManymovies(arr) {
    // filter prima uslov i ako uslov nije zadoviljen, onda taj element izbacuje iz liste
    // filter vraca u novi niz elemente koji zadovoljavaju uslov
    let drama = arr.filter((movie) =>
        movie.genre.includes('Drama')
    )

    return drama
}
let a = howManymovies(movies)
console.log(a)



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAvarage(arr) {
    let total = arr.reduce((acc, curr) => {

        return acc + curr.rate
    }, 0)

    const l = arr.length

    return total / l

}
const avg = ratesAvarage(movies)
console.log('avg is', avg)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaOnly = arr.filter((movie) => {
        return movie.genre.includes('Drama')
    })
    return ratesAvarage(dramaOnly)
}
let dramaProsek = dramaMoviesRate(movies)
console.log('Drama Filmovi Prosek', dramaProsek)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    // let byYear = arr.sort((a, b) => {
    //     if (a.year > b.year) {
    //         return -1
    //     }
    //     if (a.year < b.year) {
    //         return 1
    //     }
    //     else {
    //         return a.title.localeCompare(b.title)
    //     }
    // })
    // arr.sort(function (a, b) { return a.year - b.year });
    // if (a.year === b.year) {
    //     arr.sort(function (a, b) {
    //         var textA = a.title.toUpperCase();
    //         var textB = b.title.toUpperCase();
    //         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    //     });
    // }

    // list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )
    // return arr.sort(function (a, b) {
    //     var textA = a.title.toUpperCase();
    //     var textB = b.title.toUpperCase();
    //     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    // });
}
// let s = orderByYear(movies)
// console.log(s)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let poImenu = arr.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    // Sta znaci localCompare i [...arr] ?
    let prvih20 = poImenu.slice(0, 20).map((item) => {
        return item.title
    })
    return prvih20
}
let filmovi = orderAlphabetically(movies)
console.log('Prvih 20 Filmova', filmovi)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
