<template>
    <div v-for="msg in messagesFiltered" :key="msg.id">
        {{ msg.text }}
    </div>
</template>

<!-- <script>
    export default {
        // Recordar que ahora deben estar habilitados los props.
        // para la ruta en 'index.js'
        props: {
            chatId: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                messages: [
                    { id: 1, text: 'Mensaje 1', author: 1 },
                    { id: 2, text: 'Mensaje 2', author: 2 },
                    { id: 3, text: 'Mensaje 3', author: 3 },
                ]
            } 
        },
        computed: {
            messagesFiltered() {
                return this.messages.filter((msg) => {
                    // return `${msg.author}` === this.$route.params.chatId
                    // Tomamos chatId de los props para manetener
                    // la independencia del componente de los parametros de ruta.
                    return `${msg.author}` === this.chatId
                })
            }
        }
    }
</script> -->

<!-- En Composition API -->
<script setup>
    import { reactive, computed } from 'vue';

    // Recordamos defineProps y defineEmits vienen importadas por defecto,
    // en Composition API.
    const props = defineProps({
    chatId: {
            type: String,
            default: '',
        },
    })

    // Al ser un valor complejo usamos reactive en lugar de ref.
    // https://escuelavue.es/tips/ref-vs-reactive-vue-3/
    const messages = reactive([])
    // Llenamos el array reactivo.
    messages.value = [
                        { id: 1, text: 'Mensaje 1', author: 1 },
                        { id: 2, text: 'Mensaje 2', author: 2 },
                        { id: 3, text: 'Mensaje 3', author: 3 },
                    ]

    // Creamos la función computada por medio de la función
    // 'computed'.
    // Accedemos a 'chatId' de forma explicita a traves de props.
    // Notar que en Options API, se da de forma implicita, al
    // declarar chatId en los props, se accedía por medio de 'this'.
    const messagesFiltered = computed(
        () => messages.value.filter((msg) => `${msg.author}` === props.chatId)
    )
</script>