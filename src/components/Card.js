// const MOVIES = ['https://fondosmil.com/fondo/26473.jpg', 'https://img1.ak.crunchyroll.com/i/spire2/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_full.jpg']
// const DIFFERENT_MOVIES = ['https://m.media-amazon.com/images/I/91gANPtj-7L._SL1500_.jpg', 'https://m.media-amazon.com/images/I/91hHYQptXTL._SL1500_.jpg']
export const Card = ({movies}) => {
    // const [movies, setMovies] = useState(MOVIES)
    return (
        <>
            {
            movies.map(singleMovie => 
                <div className="relative">
                    <img className="w-96" src={singleMovie} alt="dbs"/>
                    <label className="bg-white from-transparent absolute bottom-0 left-0 w-full">
                        <h2 className=""> Movie title</h2>
                        <p>Date of premiere</p>
                    </label>
                </div>
                )
            }
        </>
    )
}