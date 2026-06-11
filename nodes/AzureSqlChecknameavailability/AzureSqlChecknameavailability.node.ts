import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlChecknameavailability implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Checknameavailability',
		name: 'N8nDevAzureSqlChecknameavailability',
		icon: { light: 'file:./azure-sql-checknameavailability.png', dark: 'file:./azure-sql-checknameavailability.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manages Azure SQL Database CRUD for servers, databases, elastic pools, recommendations, and operations.',
		defaults: { name: 'Azure SQL Checknameavailability' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlChecknameavailabilityApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
