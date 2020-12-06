import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <button>
                <Link to="/bar">Bar</Link>
            </button>
            <button>
                <Link to="/radar">Radar</Link>
            </button>
        </div>
    )
}