import { Button } from '../components/Button/Button'
import { Page } from '../components/Page/Page'

const ButtonPage = () => {
    return (
        <Page>
            <h1>Button Page</h1>
            <Button randomColor styles={{ backgroundColor: 'red', fontSize: '25px' }}>Click me</Button>
        </Page>

    )
}

export default ButtonPage