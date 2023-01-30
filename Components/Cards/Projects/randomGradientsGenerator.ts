const Gradients: {key: Number, From: String, Via: String, To: String}[] = [
    {
        key: 1,
        From: 'red-500',
        Via: 'orange-500',
        To: 'purple-500'
    },
    {
        key: 2,
        From: 'sky-500',
        Via: 'blue-500',
        To: 'violet-500'
    },
    {
        // bg-gradient-to-r from-yellow-200 via-green-200 to-green-500
        key: 3,
        From: 'yellow-200',
        Via: 'green-200',
        To: 'green-500'
    },
    {
        // bg-gradient-to-b from-sky-400 to-sky-200
        key: 4,
        From: 'sky-400',
        Via: 'green-300',
        To: 'sky-200'
    },
    {
        // bg-gradient-to-r from-rose-400 to-orange-300
        key: 5,
        From: 'rose-400',
        Via: 'red-300',
        To: 'orange-300'
    }
]
export default Gradients