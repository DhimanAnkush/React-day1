import './list.css'

export const List = () => {
    return (
        <div>
            <div className='head'>
                <h1 >Mobile Operating System</h1>
                <ul>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>IPhone</li>
                    <li>Windows Phone</li>
                </ul>
            </div>
            <div className='head'>
                <h1 >Mobile Manufacturers</h1>
                <ul>
                    <li>Samsung</li>
                    <li>HTC</li>
                    <li>Micromax</li>
                    <li>Apple</li>
                </ul>
            </div>
        </div>
    )
}