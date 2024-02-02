import PartLine from './PartLine'

const Parts = (props) => {
    const parts = props.course.parts;
    return (
        <ul>
            <PartLine parts={parts} />
        </ul>
    )
}

export default Parts