const Total = (props) => {
    const { course } = props.course;
    const ex = course.parts;
    const sum = ex.reduce((s, p) => s + parseInt(p.exercises), 0)
    return (
        <div>
            <p><b>total of {sum} exercises</b></p>
        </div>
    )
}

export default Total