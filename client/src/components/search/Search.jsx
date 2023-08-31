import './Search.scss';

export function Search(){
    return(
        <div className = "header__search search">
            <input type="text" className="search__field"/>
            <button className = "search__btn"></button>    
        </div>
    )
}