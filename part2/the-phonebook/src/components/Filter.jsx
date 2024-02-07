const Filter = (props) => {
    const setFilterName = props.setFilterName

    // change filterName
    const handleFilterName = (event) => {
        setFilterName(event.target.value);
    }
    
    return (
        <div>filter by name: <input
            type="text"
            onChange={handleFilterName}
            />
        </div>
    )
}

export default Filter