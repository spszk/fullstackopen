import PartLine from './PartLine'

const Parts = (props) => {
    const {course} = props.course;
    const parts = course.parts;
    return (
        <ul>
            <PartLine parts={parts} />
        </ul>
    )
}

export default Parts