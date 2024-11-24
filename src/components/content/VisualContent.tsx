import me from './../../assets/me.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function VisualContent() {
    return (
        <>
            <div className="lg:pt-16 p-5" data-testid="visual-content">
                <div className='mb-5 text-xl lg:text-2xl'>Hello, it's me:</div>
                <div className='lg:ml-5 relative w-32 lg:w-36 mb-5'>
                    <img className='rounded-full shadow-lg' src={me} alt="Me" />
                </div>

                <div className='lg:ml-5 text-3xl lg:text-5xl'>Leonardo Gallo</div>
                <div className='flex items-center'>
                    <div className='lg:ml-5 mt-2 text-xl lg:text-2xl font-thin'>Software Architect</div>

                    <div className='flex gap-1 items-center'>
                        <FontAwesomeIcon icon={faMapPin} className="ml-5 mt-2 h-8 w-8 text-purple-700 hover:text-purple-500" />
                        <div className='pt-2 font-thin text-lg'>Campinas, SP, BR</div>
                    </div>
                </div>
                <div className='flex lg:ml-2 gap-2 mt-5 items-center'>
                    <svg className='h-5 w-10 text-gray-800 dark:text-white fill-current' viewBox="0 0 50 50"><path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z" /></svg>
                    <svg className='h-5 w-10 text-gray-800 dark:text-white fill-current' viewBox="0 0 50 50"><path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z" /></svg>
                    <svg className='h-8 w-12 text-gray-800 dark:text-white fill-current' viewBox="0 0 32 32"><path d="M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z" /></svg>
                    <svg className='h-7 w-12 text-gray-800 dark:text-white fill-current' viewBox="0 0 50 50"><path d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z" /></svg>
                    <svg className='h-4 w-20 text-gray-800 dark:text-white fill-current' viewBox="20.7 244.9 600.3 154.7"><path d="m303 290c-3.2-.1-5.8 2.4-5.9 5.5v28.8c-13.7-11-33.8-8.8-44.8 4.9-4.5 5.7-7 12.7-7 20-.3 17.6 13.7 32.1 31.3 32.4s32.1-13.7 32.4-31.3v-54.4c0-1.6-.6-3.1-1.7-4.2-1.2-1.1-2.7-1.7-4.3-1.7m-7.5 66.9c-2 4.8-5.8 8.6-10.6 10.7-5 2.1-10.6 2.1-15.6 0-4.8-2-8.5-5.9-10.5-10.6-2.1-4.9-2.1-10.5 0-15.5 2-4.8 5.8-8.6 10.5-10.6 5-2.1 10.6-2.1 15.6 0 4.8 2.1 8.6 5.9 10.6 10.7 2.1 4.8 2.1 10.4 0 15.3m74-30.2c-12.4-12.4-32.6-12.4-45 0-6 6-9.3 14.1-9.3 22.5-.3 17.6 13.7 32.1 31.3 32.4s32.1-13.7 32.4-31.3v-1.1c0-4.2-.8-8.3-2.4-12.2s-4-7.4-7-10.3m-4.1 30.1c-1 2.4-2.5 4.5-4.3 6.3s-4 3.3-6.3 4.3c-5 2.1-10.6 2.1-15.6 0-4.8-2-8.6-5.9-10.6-10.6-2.1-4.9-2.1-10.5 0-15.5 2-4.8 5.8-8.5 10.6-10.6 5-2.1 10.6-2.1 15.6 0 2.4 1 4.5 2.5 6.3 4.3s3.3 4 4.3 6.3c2.1 5.1 2.1 10.7 0 15.5m135.8-33.6c0-.8-.2-1.6-.5-2.3s-.8-1.3-1.3-1.9c-.5-.5-1.2-1-1.9-1.3s-1.5-.5-2.3-.5c-1.1 0-2.2.3-3.2.9l-34 22.1v-44.2c0-1.6-.6-3.1-1.7-4.2s-2.6-1.8-4.2-1.8c-3.3 0-5.9 2.6-6 5.9v79.1c0 1.6.6 3.1 1.7 4.2 1.1 1.2 2.6 1.8 4.2 1.8s3.1-.6 4.2-1.8c1.1-1.1 1.8-2.6 1.7-4.2v-20.5l6.9-4.5 26.3 29.5c1.1 1 2.5 1.6 4 1.5.8 0 1.6-.1 2.3-.5.7-.3 1.3-.7 1.9-1.3.5-.6 1-1.2 1.3-1.9s.5-1.5.5-2.3c0-1.5-.6-3-1.6-4.1l-24.4-27.5 23.8-15.5c1.6-1 2.4-2.8 2.3-4.7m-98.7 11.8c1.8-1.8 4-3.3 6.4-4.3 2.5-1 5.1-1.6 7.8-1.6 2.4 0 4.7.4 6.9 1.2 2.2.9 4.3 2.1 6.1 3.7 1.1.9 2.5 1.3 3.9 1.3 1.6.1 3.2-.5 4.3-1.7 1.1-1.1 1.7-2.7 1.7-4.3 0-1.7-.7-3.4-2.1-4.5-5.7-5.1-13.1-7.9-20.8-7.7-17.6 0-31.9 14.3-31.9 31.9s14.2 31.8 31.7 31.9c7.7 0 15.1-2.7 20.9-7.7 1.2-1.1 1.9-2.7 1.9-4.4.1-3.2-2.4-5.8-5.5-5.9h-.4c-1.4 0-2.7.4-3.8 1.2-1.8 1.6-3.8 2.8-6 3.7-2.2.8-4.6 1.2-6.9 1.2-2.7 0-5.3-.5-7.8-1.6-2.4-1-4.5-2.5-6.4-4.3-7.8-7.8-7.8-20.4-.1-28.2.1.2.1.2.1.1m216.8-13.7c-1.2-1.1-2.5-1.9-4-2.4-1.7-.6-3.5-1-5.3-1.2s-3.6-.3-5.4-.3c-3.6 0-7.3.6-10.7 1.9-3.4 1.2-6.5 3-9.3 5.2v-1.2c-.1-3.3-2.9-5.8-6.2-5.7a5.9 5.9 0 0 0 -5.7 5.7v51.9c.1 3.3 2.9 5.8 6.2 5.7a5.9 5.9 0 0 0 5.7-5.7v-25.9c0-2.7.5-5.3 1.6-7.8 1-2.4 2.4-4.5 4.3-6.3 1.8-1.8 4-3.3 6.3-4.3 2.5-1 5.1-1.6 7.8-1.6s5.3.5 7.8 1.4c.8.4 1.6.6 2.5.6.8 0 1.6-.1 2.3-.5.7-.3 1.3-.7 1.9-1.3.5-.5 1-1.2 1.3-1.9s.5-1.5.5-2.3c.1-1.5-.5-2.9-1.6-4m-55.2 15.7c-5.1-11.8-16.7-19.5-29.5-19.6-17.6 0-31.8 14.2-31.9 31.8 0 17.6 14.3 31.9 31.9 31.9 7.6 0 15-2.7 20.8-7.7l.2-.2c.5-.4 1-.9 1.3-1.5 1.9-2.8 1.2-6.5-1.5-8.4-2.3-1.5-5.3-1.2-7.3.7-.2.2-.8.7-.8.8l-.1.1c-1.7 1.4-3.6 2.6-5.7 3.3-2.2.8-4.5 1.2-6.9 1.1-2.2 0-4.3-.3-6.4-1-2-.7-3.9-1.6-5.6-2.9-1.7-1.2-3.2-2.7-4.4-4.4-1.3-1.7-2.2-3.7-2.8-5.7h45c1.6 0 3.1-.6 4.2-1.7 1.2-1.1 1.8-2.6 1.7-4.2.1-4.3-.7-8.5-2.2-12.4m-48.7 6.4c.6-2.1 1.5-4 2.8-5.7 1.2-1.7 2.7-3.2 4.4-4.4s3.6-2.2 5.6-2.9 4.2-1 6.3-1 4.3.3 6.3 1c4 1.3 7.5 3.9 10 7.3 1.3 1.7 2.2 3.7 2.9 5.7zm83.6 29c-2.3 0-4.1 1.9-4.1 4.2s1.9 4.1 4.2 4.1 4.1-1.9 4.1-4.1c0-2.4-1.9-4.2-4.2-4.2zm0 7.4c-1.8.1-3.3-1.3-3.4-3.1s1.3-3.3 3.1-3.4 3.3 1.3 3.4 3.1v.2c.1 1.7-1.3 3.2-3 3.2z" /><path d="m600 376.6c.5-.1.8-.5.8-1 0-.4-.1-.7-.4-.9-.4-.2-.9-.3-1.4-.3s-1.1 0-1.6.1v4.1h.9v-1.6h.4c.5 0 .8.2.9.6.1.3.2.7.3 1h1c-.2-.3-.3-.7-.3-1 .1-.4-.2-.8-.6-1m-1.2-.3h-.5v-1.2h.5c.6 0 .9.3.9.6.1.4-.4.7-.9.6m-364.4-72.9c-.6-.5-6-4.6-17.6-4.6-3 0-6.1.3-9.1.8-2.2-15.3-14.9-22.7-15.4-23.1l-3.1-1.8-2 2.9c-2.5 3.9-4.4 8.3-5.5 12.8-2.1 8.7-.8 16.9 3.6 23.9-5.3 3-13.9 3.7-15.7 3.8h-142c-3.7 0-6.7 3-6.7 6.7-.2 12.4 1.9 24.8 6.2 36.5 4.9 12.8 12.2 22.3 21.6 28.1 10.6 6.5 27.9 10.2 47.4 10.2 8.8 0 17.6-.8 26.3-2.4 12.1-2.2 23.7-6.4 34.4-12.5 8.8-5.1 16.7-11.6 23.4-19.2 11.3-12.7 18-26.9 22.9-39.5h2c12.3 0 19.9-4.9 24.1-9.1 2.8-2.6 4.9-5.8 6.4-9.4l.9-2.6z" /><path d="m40.8 314h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1 1 .8 1.7 1.7 1.7zm26.2 0h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1 1 .8 1.7 1.7 1.7m26.7 0h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 1 .7 1.7 1.7 1.7zm26.3 0h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 1 .8 1.7 1.7 1.7zm-53-24.3h19c.9 0 1.7-.8 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1.9.8 1.7 1.7 1.7m26.7 0h19c.9 0 1.7-.8 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 .9.7 1.7 1.7 1.7m26.3 0h19c.9 0 1.7-.8 1.7-1.7v-17c0-.9-.8-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 .9.8 1.7 1.7 1.7m0-24.4h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.8-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 .9.8 1.7 1.7 1.7m26.5 48.7h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1 1 .8 1.7 1.7 1.7" /></svg>
                    <svg className='h-4 w-10 text-gray-800 dark:text-white fill-current' viewBox="-.1 1.1 304.9 179.8"><path d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" /><path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" /><path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" /></svg>
                </div>      
            </div>
        </>
    );
}