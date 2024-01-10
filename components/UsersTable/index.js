import styles from './styles.module.css';

function UsersTable({ data = {} }) {
  const {total_count = '', items = []} = data || {};

  const clickHandler = (user) => {
    window.open(user?.html_url);
  };

  return (
    <div>
      {total_count > 0 ? items?.map((user) => (
        <div key={user.id} className={styles.card}>
          <div>
            <img src={user?.avatar_url} alt={user?.login} className={styles.avatar} />
          </div>
          <div className={styles.user_info}>
            <h2 className={styles.user_name} onClick={() => clickHandler(user)}>
              {user?.login}
            </h2>
          </div>
        </div>
      )) : <div className={styles.card}>No results found</div>}
    </div>
  );
}

export default UsersTable;
