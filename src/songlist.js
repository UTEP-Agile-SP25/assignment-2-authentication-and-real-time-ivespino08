import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "./auth";
import { db } from "./config";

async function addSong() {
    const songName = document.getElementById("addSongName").value.trim()
    const artist = document.getElementById("addArtistName").value.trim()
    const releaseYear = document.getElementById("addSongYear").value.trim()
    const personalRating = document.getElementById("addRating").value.trim()

    try {
        const songRef = doc(db, "songs", songName.toLowerCase()+"-"+artist.toLowerCase())

        await setDoc(songRef, {
            name: songName,
            artist: artist,
            released: releaseYear,
            rating: personalRating
        })

        console.log("Song has been added to the song list!")

        document.getElementById("addSongName").value = ""
        document.getElementById("addArtistName").value = ""
        document.getElementById("addSongYear").value = ""
        document.getElementById("addRating").value = ""
    } catch (error) {
        console.error("Error adding song to song list", error.message)
    }
}

async function deleteSong(){
    const songId = document.getElementById("deleteSongID").value
    try {
        const songRef = doc(db, "songs", songId)

        await deleteDoc(songRef)
        console.log("Song successfully removed from songlist")

    } catch (error) {
        console.error("Error removing song from song list", error.message)
    }
}

const songCollection = collection(db, "songs")
onSnapshot(songCollection, (snapshot) => {
    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""

    snapshot.forEach((doc) => {
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML = `
        <td> ${doc.id}</td>
        <td> ${data.name}</td>
        <td> ${data.artist}</td>
        <td> ${data.released}</td>
        <td> ${data.rating}</td>
        `

        tableBody.appendChild(row)
    })
})


const addSongForm = document.querySelector("#addSong")
if (addSongForm) {
    addSongForm.addEventListener("submit", (event) => {
        event.preventDefault()
        addSong()
    })
}

const deleteSongForm = document.querySelector("#deleteSong")
if (deleteSongForm) {
    deleteSongForm.addEventListener("submit", (event) => {
        event.preventDefault()
        deleteSong()
    })
}