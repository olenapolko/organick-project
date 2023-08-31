import './CircleSign.scss';
export function CircleSign({amount,achievement}){
    return (
        <div className='achievements__circle-sign circle-sign'>
            <p className='circle-sign__amount'>{amount}</p>
            <p className='circle-sign__achievement'>{achievement}</p>
        </div>
    )
}