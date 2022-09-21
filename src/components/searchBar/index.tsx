export const QuizSearch = ({setSearchQuery, setNameQuery}:any) => {
    return (
        <header>
            <input type="text" onChange={(e)=>{setNameQuery(e.target.value)}}/>
            <select onChange={(e)=>{setSearchQuery(e.target.value)}}>
                <option value="">All</option>
                <option value="education">Education</option>
                <option value="buisness">Buisness</option>
            </select>
        </header>
    )
}