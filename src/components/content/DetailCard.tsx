import VisualContent from './VisualContent'
import TextContent from './TextContent'


export default function DetailCard() {
    return (
        <>
            <div className='container mt-10 mx-auto max-w-6xl p-10'>
                <div className="grid lg:grid-flow-col gap-5 lg:gap-20 text-black dark:text-white">
                    <VisualContent />
                    <TextContent />
                </div>
            </div>
        </>
    );
}