const Total = (props) => {
    const { course } = props.course;
    const ex = course.parts;
    return (
        <div>
            <p><b>total of {parseInt(ex[0].exercises) + parseInt(ex[1].exercises) + parseInt(ex[2].exercises)} exercises</b></p>
        </div>
    )
}

export default Total