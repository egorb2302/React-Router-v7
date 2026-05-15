import type { GeneralUserType } from '../types/types';
import { Link, useSearchParams } from 'react-router';

const users: GeneralUserType[] = [
    { id: 1, name: 'Joe', mark: 5 },
    { id: 2, name: 'John', mark: 4 },
    { id: 3, name: 'Mark', mark: 2 },
    { id: 4, name: 'Nick', mark: 5 }
]

export default function UsersList() {
    const [searchParams, setSearchParams] = useSearchParams();

    const mark = searchParams.get('mark') || '';
    const name = searchParams.get('name') || '';

    const filteredUsers = users.filter(user => {
        if (mark === '' && name === '') return true;

        const matchesSearch = user.mark.toString().includes(mark);
        const nameSearch = user.name.toLocaleLowerCase().includes(name.toLowerCase());

        return matchesSearch && nameSearch;
    })

    const updateFilter = (key: string, value: string) => {
        switch (key) {
            case "mark":
                setSearchParams(prev => {
                    if (value === '') {
                        prev.delete(key)
                    } else {
                        prev.set(key, value)
                    }
                    return prev
                }); break
            case "name":
                setSearchParams(prev => {
                    if (value === '') {
                        prev.delete(key)
                    } else {
                        prev.set(key, value)
                    }
                    return prev
                })
        }
    }

    const resetFilters = () => {
        setSearchParams({})
    }

    return (
        <div>
            <h1>Users:</h1>
            <input type="text" onChange={(e) => updateFilter('mark', e.target.value)} placeholder="mark" />
            <input type="text" onChange={(e) => updateFilter('name', e.target.value)} placeholder="name"/>
            <button onClick={resetFilters}>Show All</button>   
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <Link to={`/dashboard/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}