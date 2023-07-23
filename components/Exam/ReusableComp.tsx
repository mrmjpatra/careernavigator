const ReusableComp = ({ desc }: { desc: string }) => {
    if (!desc) {
        return(
            <p className="text-2xl text-red-900 font-medium">No Data Available</p>
        )
    }
    return (
        <div id='preview' dangerouslySetInnerHTML={{ __html: JSON.parse(desc) }}></div>
    )
}

export default ReusableComp