import Header from './Header'
import Parts from './Parts'
import Total from './Total'

const Course = (course) => {
    return (
        <div>
            <Header course={course} />
            <Parts course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course