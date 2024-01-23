const Header = (props) => {
    const {course} = props.course;
    
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    ) 
}

export default Header