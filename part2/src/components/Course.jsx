import Header from './Header'
import Parts from './Parts'

const Course = (course) => {
    return (
        <div>
            <Header course={course} />
            <Parts course={course}/>
        </div>
    )
}

export default Course