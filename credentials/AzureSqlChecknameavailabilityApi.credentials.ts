import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlChecknameavailabilityApi implements ICredentialType {
        name = 'N8nDevAzureSqlChecknameavailabilityApi';

        displayName = 'Azure SQL Checknameavailability API';

        icon: Icon = { light: 'file:../nodes/AzureSqlChecknameavailability/azure-sql-checknameavailability.png', dark: 'file:../nodes/AzureSqlChecknameavailability/azure-sql-checknameavailability.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Checknameavailability API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
