import React, {Component} from 'react';
import './styles/styles.scss';

let Layout = function(components) {
    return class extends Component{
        render() {
            let {main, sidebar, header} = components;
            return (
                <div className="app">
                    {header &&
                        (typeof(header) === 'function' ?
                            <components.header />
                            :
                            header()
                        )
                    }
                    {main &&
                        (typeof(main) === 'function' ?
                            <components.main />
                            :
                            main()
                        )
                    }
                    {sidebar &&
                        (typeof(sidebar) === 'function' ?
                            <components.sidebar />
                            :
                            sidebar()
                        )
                    }
                </div>
            )
        }
    }
}

export default Layout;
