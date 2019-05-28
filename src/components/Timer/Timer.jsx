import g from "../App/App.scss";
import s from "./Timer.scss";

class Timer extends React.Component {
    state = {
        time: 10,
        timeOff: false
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    start = () => {
        this.timerId = setInterval(
            () => {
                if (this.state.time <= 0) {
                    this.setState({ timeOff: true });
                    this.stop();
                }
                this.setState(state => ({ time: state.time - 1 }));
            },
            1000
        );
    }

    stop = () => {
        clearTimeout(this.timerId);
    }


    renderTimer = () => (
        <div cx="s.btn-wait g.btn g.btn-pink">
            WAIT {this.state.time} SECONDS...
        </div>
    )

    renderLink = () => (
        <a
            cx="s.link"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            Ссылка
        </a>
    )

    render() {
        if (this.state.timeOff) {
            return this.renderLink();
        }
        return this.renderTimer();
    }
}
export default Timer;
