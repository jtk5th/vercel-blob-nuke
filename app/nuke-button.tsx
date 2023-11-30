'use client'

export default function NukeButton() {

    function nuke() {
        fetch('/api/nuke')
    }

    return (
        <button
            className=" text-lg bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded"
            onClick={nuke}
        >
            Nuke
        </button>
    )

}