import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev" initialIsFollowing={true} name="Misael Cruz"/>
            <TwitterFollowCard userName="pheralb" name="Jaime Ruiz"/>
            <TwitterFollowCard userName="vxnder" name="Alejandro Millan"/>
            <TwitterFollowCard userName="olafVH" name="Olaf Vazquez"/>
        </section>
    )
}