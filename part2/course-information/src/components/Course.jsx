import Header from './Header'
import Parts from './Parts'
import Total from './Total'

const Course = (props) => {
    const courses = props.courses;
    return (
        <div>
            <h1>Web development curriculum</h1>
            <Header course={courses[0]} />
            <Parts course={courses[0]} />
            <Total course={courses[0]} />
            <Header course={courses[1]} />
            <Parts course={courses[1]} />
            <Total course={courses[1]} />
        </div>
    )
}

export default Course