export const QuizSearch = ({setSearchQuery}:any) => {
    return (
        <header>
            <select onChange={(e)=>{setSearchQuery(e.target.value)}}>
                <option value="education">Education</option>
                <option value="buisness">Buisness</option>
            </select>
        </header>
    )
}