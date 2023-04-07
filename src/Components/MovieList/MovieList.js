import Movie from "../Movie/Movie"

export default function MovieList(params) {

    return (
        <>
            {params.trending.map(trending => {
                return (
                    <div key={trending.id}>
                        <Movie trending={trending} />
                    </div>
                )
            }


            )
            }</>

    )
}