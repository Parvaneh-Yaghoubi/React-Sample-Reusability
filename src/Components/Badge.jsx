export default function Badge({label, value, score}){
    return(
        <div>
            <p><span className="prop-style">{label}</span> was the winner in <span className="prop-style">{value}</span> Hackathon copmtetion and got <span className="prop-style">{score}</span> scores!</p>
        </div>
    )
}