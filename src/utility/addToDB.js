import { toast, Bounce } from 'react-toastify';
const notify = () => toast.error('You Already added in your book list!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem('readlist');

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData;
    } else {
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)) {
        notify()
    } else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readlist',data)
        
    }

}
export {addToStoreDB};