import styles from './styles.module.css'

const Pagination = ({
    page='', 
    setPage=() => {},
    itemCount = '',
}) => {
    const totalPageCount = Math.ceil(itemCount/30);

    const prevPageHandler = () => {
        if (page > 1) {
            setPage(page-1);
        }
    };

    const nextPageHandler = () => {
        if (page < totalPageCount) {
            setPage(page+1);
        }
    }
    
    return (
        <div className={styles.pagination_container}>

            <button 
                class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={() => prevPageHandler()}
                disabled={page === 1}
            >
                Prev
            </button>
            <p class="px-5">
                {page} of {totalPageCount}
            </p>
            <button 
                class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={() => nextPageHandler()}
                disabled={page === totalPageCount}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;