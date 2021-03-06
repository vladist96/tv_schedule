import {Component, h} from 'preact';
import { Btn } from '../buttons';
import style from './style'

export class Header extends Component {

  constructor() {
    super();
    this.state = {
      count: 'hehe',
    };
  }

  render() {
    return (
			<header class="header">
        <div class="container">
          <div class="row">
            <div class="width25 header__brand">
              <a class="header__brand__link" href="/">
                <svg class="header__logo" xmlns="http://www.w3.org/2000/svg" width="109" height="37" fill="none">
                  <path fill="#000" d="M48.423 21.694v7.994H44V7h8.374c1.612 0 3.027.312 4.246.935 1.228.623 2.172 1.511 2.83 2.665.659 1.142.988 2.446.988 3.91 0 2.224-.722 3.98-2.167 5.268-1.435 1.278-3.425 1.916-5.97 1.916h-3.878zm0-3.786h3.95c1.17 0 2.06-.291 2.67-.873.618-.582.928-1.413.928-2.493 0-1.112-.31-2.01-.929-2.696-.619-.685-1.474-1.039-2.565-1.06h-4.054v7.122zM72.173 17.05a10.964 10.964 0 0 0-1.533-.124c-1.612 0-2.669.577-3.17 1.73v11.032h-4.26v-16.86h4.024l.118 2.01c.855-1.548 2.04-2.322 3.553-2.322.472 0 .914.068 1.327.203l-.059 4.332zM82.876 25.03c0-.552-.26-.983-.781-1.294-.511-.322-1.337-.608-2.477-.857-3.794-.842-5.69-2.545-5.69-5.111 0-1.496.584-2.743 1.754-3.74 1.18-1.008 2.717-1.512 4.614-1.512 2.025 0 3.642.504 4.85 1.512 1.22 1.008 1.829 2.316 1.829 3.927h-4.261c0-.644-.197-1.174-.59-1.59-.393-.426-1.007-.639-1.843-.639-.717 0-1.272.172-1.665.514a1.66 1.66 0 0 0-.59 1.31c0 .498.221.903.663 1.215.452.301 1.21.566 2.27.795 1.062.218 1.956.467 2.684.748 2.25.872 3.376 2.384 3.376 4.534 0 1.538-.624 2.784-1.873 3.74-1.248.945-2.86 1.418-4.835 1.418-1.337 0-2.526-.25-3.568-.748-1.032-.509-1.843-1.2-2.432-2.072-.59-.883-.885-1.834-.885-2.852h4.04c.039.8.32 1.413.84 1.839.52.426 1.219.639 2.093.639.816 0 1.43-.162 1.843-.483a1.57 1.57 0 0 0 .634-1.294zM94.877 8.683v4.145h2.727v3.303h-2.727v8.415c0 .623.113 1.07.339 1.34.226.27.658.405 1.297.405.472 0 .89-.036 1.253-.109v3.413a8.335 8.335 0 0 1-2.58.405c-2.988 0-4.511-1.595-4.57-4.784v-9.085h-2.33v-3.303h2.33V8.683h4.26zM108.941 17.05a10.965 10.965 0 0 0-1.533-.124c-1.612 0-2.669.577-3.17 1.73v11.032h-4.26v-16.86h4.024l.118 2.01c.855-1.548 2.04-2.322 3.553-2.322.472 0 .914.068 1.327.203l-.059 4.332z"/>
                  <path fill="#4DD0E1" fill-rule="evenodd" d="M16.5 0c1.081 0 1.958.899 1.958 2.008V13.48c0 1.108-.877 2.007-1.958 2.007s-1.958-.899-1.958-2.007V2.008C14.542.898 15.42 0 16.5 0zm-6.098 6.385c.577.938.304 2.178-.61 2.77-3.536 2.29-5.877 6.326-5.877 10.923 0 7.128 5.635 12.906 12.585 12.906 6.95 0 12.585-5.778 12.585-12.907 0-4.596-2.341-8.633-5.877-10.922-.914-.592-1.187-1.832-.61-2.77a1.929 1.929 0 0 1 2.7-.625C29.923 8.754 33 14.046 33 20.077 33 29.425 25.613 37 16.5 37S0 29.424 0 20.078C0 14.046 3.078 8.754 7.701 5.76a1.929 1.929 0 0 1 2.7.625z" clip-rule="evenodd"/></svg>
                </a>
            </div>
            <nav class="width50 header__nav text-center">
              <a class="header__nav__item" href="#feat">Features</a>
              <a class="header__nav__item" href="#about">About</a>
              <a class="header__nav__item" href="#contacts">Contacts</a>
            </nav>
            <div class="width25 header__cta text-right">
              <Btn btnlabel="Contact" btnhref="#" />
            </div>
          </div>
        </div>
			</header>
		);
  }
}