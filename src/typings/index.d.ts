declare module '@app/types' {
    interface Identifiable {
        id: number
    }

    interface SampleData extends Identifiable {
        title: string
        description: string
    }

    // Declare required types here
}
