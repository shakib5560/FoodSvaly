import React from 'react'
import erros from './assets/404.jfif'
import './404.css'

export const Errors = () => {
  return (
    <div id="notfound">
    <div class="notfound">
        <div class="notfound-404">
            <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <a href="http://localhost:5173/">Go To Homepage</a>
    </div>
</div>
  )
}
