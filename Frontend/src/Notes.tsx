const Notes = () => {
    return (
        <div className="flex">
            <textarea className="w-full h-45 resize-none focus:outline-none text-gray-700"
            style={{
            lineHeight: "1.5rem",
            backgroundImage:
                "linear-gradient(to bottom, #d1d5db 1px, transparent 1px)",
            backgroundSize: "100% 1.5rem",
            backgroundAttachment: "local",
            }}>
            </textarea>
        </div>
    )
}
export default Notes;