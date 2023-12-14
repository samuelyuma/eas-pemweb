import { CollectionConfig } from 'payload/types';

const Accounts: CollectionConfig = {
    slug: 'accounts',
    auth: {
        cookies: {
            sameSite: 'strict',
            secure: true,
        },
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'nama',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            unique: true,
        },
        {
            name: 'asalSekolah',
            type: 'text',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Waiting',
                    value: 'waiting',
                },
                {
                    label: 'Rejected',
                    value: 'rejected',
                },
                {
                    label: 'Accepted',
                    value: 'accepted',
                },
            ],
        },
        {
            name: 'tanggalDaftar',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                    displayFormat: 'd MMM yyy h:mm:ss a',
                },
            },
        },
    ],
};

export default Accounts;
