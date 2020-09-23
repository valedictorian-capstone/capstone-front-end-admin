import { ApartmentOutlined, HomeOutlined, LogoutOutlined, NotificationOutlined, PartitionOutlined, PhoneOutlined, ProfileOutlined, SettingOutlined, SmileOutlined, TeamOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
const getPorts = (id: string) => {
  return [
    {
      'id': id + 'port1',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port2',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0.25 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port3',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0.5 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port4',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 0.75 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port5',
      'shape': 'Circle',
      'offset': { 'x': 0, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port6',
      'shape': 'Circle',
      'offset': { 'x': 0.25, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port7',
      'shape': 'Circle',
      'offset': { 'x': 0.5, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port9',
      'shape': 'Circle',
      'offset': { 'x': 0.75, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port0',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port10',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0.25 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port11',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0.5 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port12',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 0.75 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port13',
      'shape': 'Circle',
      'offset': { 'x': 1, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port14',
      'shape': 'Circle',
      'offset': { 'x': 0.25, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port15',
      'shape': 'Circle',
      'offset': { 'x': 0.5, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
    {
      'id': id + 'port16',
      'shape': 'Circle',
      'offset': { 'x': 0.75, 'y': 1 },
      'height': 8,
      'width': 8,
      'visibility': 1,
    },
  ];
};
export const environment = {
  'apiEndpont': 'http://localhost:3000/',
  'api': {
    'basic-api': {
      'role': {
        'main': 'api/v1/Role',
        'getById': 'api/v1/Role/',
        'active': 'api/v1/Role/Active',
        'deactive': 'api/v1/Role/Deactive',
      },
      'department': {
        'main': 'api/v1/Department',
        'getById': 'api/v1/Department/',
        'active': 'api/v1/Department/Active',
        'deactive': 'api/v1/Department/Deactive',
      },
      'group': {
        'main': 'api/v1/Group',
        'getById': 'api/v1/Group/',
        'active': 'api/v1/Group/Active',
        'deactive': 'api/v1/Group/Deactive',
      },
      'pattern': {
        'main': 'api/v1/Pattern',
        'getById': 'api/v1/Pattern/',
        'active': 'api/v1/Pattern/Active',
        'deactive': 'api/v1/Pattern/Deactive',
      },
      'permission': {
        'main': 'api/v1/Permission',
        'getById': 'api/v1/Permission/',
        'active': 'api/v1/Permission/Active',
        'deactive': 'api/v1/Permission/Deactive',
      },
    },
    'extra-api': {
      'auth': {
        'main': 'api/v1/Auth',
        'token': 'api/v1/Auth/Token',
      },
    },
    'bpmn-api': {
      'comment': {
        'main': 'api/v1/Comment',
        'getById': 'api/v1/Comment/',
        'active': 'api/v1/Comment/Active',
        'deactive': 'api/v1/Comment/Deactive',
      },
      'condition': {
        'main': 'api/v1/Condition',
        'getById': 'api/v1/Condition/',
        'active': 'api/v1/Condition/Active',
        'deactive': 'api/v1/Condition/Deactive',
      },
      'work-flow': {
        'main': 'api/v1/WorkFlow',
        'getById': 'api/v1/WorkFlow/',
        'active': 'api/v1/WorkFlow/Active',
        'deactive': 'api/v1/WorkFlow/Deactive',
      },
      'work-flow-step': {
        'main': 'api/v1/WorkFlowStep',
        'getById': 'api/v1/WorkFlowStep/',
        'active': 'api/v1/WorkFlowStep/Active',
        'deactive': 'api/v1/WorkFlowStep/Deactive',
      },
      'work-flow-step-instance': {
        'main': 'api/v1/WorkFlowStepInstance',
        'getById': 'api/v1/WorkFlowStepInstance/',
        'active': 'api/v1/WorkFlowStepInstance/Active',
        'deactive': 'api/v1/WorkFlowStepInstance/Deactive',
      },
      'work-flow-connection': {
        'main': 'api/v1/WorkFlowConnection',
        'getById': 'api/v1/WorkFlowConnection/',
        'active': 'api/v1/WorkFlowConnection/Active',
        'deactive': 'api/v1/WorkFlowConnection/Deactive',
      },
      'work-flow-instance': {
        'main': 'api/v1/WorkFlowInstance',
        'getById': 'api/v1/WorkFlowInstance/',
        'active': 'api/v1/WorkFlowInstance/Active',
        'deactive': 'api/v1/WorkFlowInstance/Deactive',
      },
    },
    'account-api': {
      'account': {
        'main': 'api/v1/Account',
        'getById': 'api/v1/Account/',
        'active': 'api/v1/Account/Active',
        'deactive': 'api/v1/Account/Deactive',
      },
      'account-extra-data': {
        'main': 'api/v1/AccountExtraData',
        'getById': 'api/v1/AccountExtraData/',
        'active': 'api/v1/AccountExtraData/Active',
        'deactive': 'api/v1/AccountExtraData/Deactive',
      },
      'account-extra-information-data': {
        'main': 'api/v1/AccountExtraInformationData',
        'getById': 'api/v1/AccountExtraInformationData/',
        'active': 'api/v1/AccountExtraInformationData/Active',
        'deactive': 'api/v1/AccountExtraInformationData/Deactive',
      },
      'account-extra-information': {
        'main': 'api/v1/AccountExtraInformation',
        'getById': 'api/v1/AccountExtraInformation/',
        'active': 'api/v1/AccountExtraInformation/Active',
        'deactive': 'api/v1/AccountExtraInformation/Deactive',
      },
    },
    'customer-api': {
      'customer': {
        'main': 'api/v1/Customer',
        'getById': 'api/v1/Customer/',
        'active': 'api/v1/Customer/Active',
        'deactive': 'api/v1/Customer/Deactive',
      },
      'customer-extra-data': {
        'main': 'api/v1/CustomerExtraData',
        'getById': 'api/v1/CustomerExtraData/',
        'active': 'api/v1/CustomerExtraData/Active',
        'deactive': 'api/v1/CustomerExtraData/Deactive',
      },
      'customer-extra-information-data': {
        'main': 'api/v1/CustomerExtraInformationData',
        'getById': 'api/v1/CustomerExtraInformationData/',
        'active': 'api/v1/CustomerExtraInformationData/Active',
        'deactive': 'api/v1/CustomerExtraInformationData/Deactive',
      },
      'customer-extra-information': {
        'main': 'api/v1/CustomerExtraInformation',
        'getById': 'api/v1/CustomerExtraInformation/',
        'active': 'api/v1/CustomerExtraInformation/Active',
        'deactive': 'api/v1/CustomerExtraInformation/Deactive',
      },
    },
    'form-api': {
      'form-control': {
        'main': 'api/v1/FormControl',
        'getById': 'api/v1/FormControl/',
        'active': 'api/v1/FormControl/Active',
        'deactive': 'api/v1/FormControl/Deactive',
      },
      'form-data': {
        'main': 'api/v1/FormData',
        'getById': 'api/v1/FormData/',
        'active': 'api/v1/FormData/Active',
        'deactive': 'api/v1/FormData/Deactive',
      },
      'form-group': {
        'main': 'api/v1/FormGroup',
        'getById': 'api/v1/FormGroup/',
        'active': 'api/v1/FormGroup/Active',
        'deactive': 'api/v1/FormGroup/Deactive',
      },
      'form-value': {
        'main': 'api/v1/FormValue',
        'getById': 'api/v1/FormValue/',
        'active': 'api/v1/FormValue/Active',
        'deactive': 'api/v1/FormValue/Deactive',
      },
    },
  },
  'i18n': {
    'languages': [
      { 'label': 'English', 'value': 'en' },
      { 'label': 'Tiếng việt', 'value': 'vi' },
      { 'label': '日本語', 'value': 'jp' },
    ],
    'vi': {
      'label': 'Tiếng Việt',
      'data': {
        'categories': [
          {
            'label': 'Trang chủ',
            'value': 'dashboard',
            'icon': (<HomeOutlined />),
          },
          {
            'label': 'Nhân sự',
            'value': 'account',
            'icon': (<TeamOutlined />),
          },
          {
            'label': 'Khách hàng',
            'value': 'customer',
            'icon': (<PhoneOutlined />),
          },
          {
            'label': 'Biểu mẫu',
            'value': 'form',
            'icon': (<ProfileOutlined />),
          },
          {
            'label': 'Quy trình',
            'value': 'work-flow',
            'icon': (<PartitionOutlined />),
          },
        ],
        'work-flow': {
          'nodes': [
            {
              'key': 'events',
              'label': 'Event Shapes',
              'data': [
                { 'id': 'Start', 'ports': getPorts('Start'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'Start' } } },
                { 'id': 'Intermediate', 'ports': getPorts('Intermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'Intermediate' } } },
                { 'id': 'NonInterruptingIntermediate', 'ports': getPorts('NonInterruptingIntermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'NonInterruptingIntermediate' } } },
                { 'id': 'NonInterruptingStart', 'ports': getPorts('NonInterruptingStart'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'NonInterruptingStart' } } },
                { 'id': 'End', 'ports': getPorts('End'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'End' } } },
                { 'id': 'ThrowingIntermediate', 'ports': getPorts('ThrowingIntermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'ThrowingIntermediate' } } },
              ],
            },
            {
              'key': 'gateways',
              'label': 'Gateway Shapes',
              'data': [
                { 'id': 'Complex', 'ports': getPorts('Complex'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Complex' } } },
                { 'id': 'EventBased', 'ports': getPorts('EventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'EventBased' } } },
                { 'id': 'Exclusive', 'ports': getPorts('Exclusive'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Exclusive' } } },
                { 'id': 'ExclusiveEventBased', 'ports': getPorts('ExclusiveEventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'ExclusiveEventBased' } } },
                { 'id': 'Inclusive', 'ports': getPorts('Inclusive'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Inclusive' } } },
                { 'id': 'None', 'ports': getPorts('None'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'None' } } },
                { 'id': 'Parallel', 'ports': getPorts('Parallel'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Parallel' } } },
                { 'id': 'ParallelEventBased', 'ports': getPorts('ParallelEventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'ParallelEventBased' } } },
              ],
            },
            {
              'key': 'activitys',
              'label': 'Activity Shapes',
              'data': [
                { 'id': 'Activity_Task', 'ports': getPorts('Activity_Task'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Activity', 'activity': { 'activity': 'Task' } } },
              ],
            },
            {
              'key': 'messages',
              'label': 'Message Shapes',
              'data': [
                { 'id': 'Message', 'ports': getPorts('Message'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Message' } },
              ],
            },
            {
              'key': 'dataobjects',
              'label': 'DataObject Shapes',
              'data': [
                { 'id': 'DataObject_Input', 'ports': getPorts('DataObject_Input'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'Input' } } },
                { 'id': 'DataObject_None', 'ports': getPorts('DataObject_None'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'None' } } },
                { 'id': 'DataObject_Output', 'ports': getPorts('DataObject_Output'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'Output' } } },
                { 'id': 'DataSource', 'ports': getPorts('DataSource'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataSource' } },
              ],
            },
            {
              'key': 'datasources',
              'label': 'DataSource Shapes',
              'data': [
                { 'id': 'DataSource', 'ports': getPorts('DataSource'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataSource' } },
              ],
            },
            {
              'key': 'groups',
              'label': 'Group Shapes',
              'data': [
                { 'id': 'Group', 'ports': getPorts('Group'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Group' } },
              ],
            },
            {
              'key': 'textannotations',
              'label': 'Text Annotation Shapes',
              'data': [
                { 'id': 'TextAnnotation', 'ports': getPorts('TextAnnotation'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'TextAnnotation' } },
              ],
            },
            {
              'key': 'connectors',
              'label': 'Connectors',
              'data': [
                {
                  'id': 'Sequen_Flow_Normal',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'Arrow' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Normal' },
                },
                {
                  'id': 'Sequen_Flow_Conditional',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'Arrow' },
                  'sourceDecorator': { 'shape': 'Diamond' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Conditional' },
                },
                {
                  'id': 'Association_BiDirectional',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'IndentedArrow' },
                  'sourceDecorator': { 'shape': 'OutdentedArrow' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'BiDirectional' },
                },
                {
                  'id': 'Association_Directional',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'IndentedArrow' },
                  'sourceDecorator': { 'shape': 'None' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'Directional' },
                },
                {
                  'id': 'Association_Default',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'None' },
                  'sourceDecorator': { 'shape': 'None' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'Default' },
                },
                {
                  'id': 'Message_Flow_Default',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'OpenArrow' },
                  'sourceDecorator': { 'shape': 'Circle' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Message', 'message': 'Default' },
                },
                {
                  'id': 'Message_Flow_InitiatingMessage',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'OpenArrow' },
                  'sourceDecorator': { 'shape': 'Circle' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Message', 'message': 'InitiatingMessage' },
                },
              ],
            },
          ],
          'label': 'Qui trình',
          'canvas': {
            'title': {
              'nodes': 'Thông tin bước',
              'connectors': 'Thông tin kết nối',
            },
            'form': {
              'basic': {
                'content': {
                  'placeholder': 'Nội dung',
                },
                'description': {
                  'placeholder': 'Ghi chú',
                },
              },
            },
          },
          'detail': {
            'title': 'Thông tin qui trình',
            'form': {
              'basic': {
                'code': {
                  'placeholder': 'Mã',
                },
                'name': {
                  'placeholder': 'Tên',
                },
                'description': {
                  'placeholder': 'Ghi chú',
                },
                'button': {
                  'save': 'Lưu',
                  'draft': 'Nháp',
                },
              },
            },
          },
        },
        'form-control': [
          { 'label': 'INPUT', value: 'input', icon: '' },
          { 'label': 'TEXT-AREA', value: 'text-area', icon: '' },
          { 'label': 'AUTO-COMPLETE', value: 'auto-complete', icon: '' },
          { 'label': 'CHECK-BOX', value: 'check-box', icon: '' },
          { 'label': 'RADIO', value: 'radio', icon: '' },
          { 'label': 'FILE', value: 'file', icon: '' },
          { 'label': 'MULTI-SELECT', value: 'multi-select', icon: '' },
          { 'label': 'COMBO-BOX', value: 'combo-box', icon: '' },
          { 'label': 'DATE-PICKER', value: 'date-picker', icon: '' },
          { 'label': 'TIME-PICKER', value: 'time-picker', icon: '' },
          { 'label': 'LABEL', value: 'label', icon: '' },
          { 'label': 'EDITOR', value: 'editor', icon: '' },
        ],
        'header': {
          'account': {
            'items': [
              {
                'value': 'setting',
                'label': 'Tài khoản',
                'icon': (<SettingOutlined />),
              },
              {
                'value': 'log-out',
                'label': 'Đăng xuất',
                'icon': (<LogoutOutlined />),
              },
            ],
          },
          'notification': {
            'tabs': [
              {
                'key': 'work',
                'tab': (
                  <span>
                    <NotificationOutlined />
                    Công việc
                  </span>
                ),
              },
              {
                'key': 'self',
                'tab': (
                  <span>
                    <SmileOutlined />
                    Cá nhân
                  </span>
                ),
              },
              {
                'key': 'company',
                'tab': (
                  <span>
                    <ApartmentOutlined />
                    Công ty
                  </span>
                ),
              },
            ],
            'emptyDescription': (
              <span>
                Chưa có thông báo
              </span>
            ),
            'title': 'Thông báo',
          },
        },
      },
    },
    'en': {
      'label': 'English',
      'data': {
        'categories': [
          {
            'label': 'Home',
            'value': 'dashboard',
            'icon': (<HomeOutlined />),
          },
          {
            'label': 'Account',
            'value': 'account',
            'icon': (<TeamOutlined />),
          },
          {
            'label': 'Customer',
            'value': 'customer',
            'icon': (<PhoneOutlined />),
          },
          {
            'label': 'Form',
            'value': 'form',
            'icon': (<ProfileOutlined />),
          },
          {
            'label': 'Work Flow',
            'value': 'work-flow',
            'icon': (<PartitionOutlined />),
          },
        ],
        'work-flow': {
          'nodes': [
            {
              'key': 'events',
              'label': 'Event Shapes',
              'data': [
                { 'id': 'Start', 'ports': getPorts('Start'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'Start' } } },
                { 'id': 'Intermediate', 'ports': getPorts('Intermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'Intermediate' } } },
                { 'id': 'NonInterruptingIntermediate', 'ports': getPorts('NonInterruptingIntermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'NonInterruptingIntermediate' } } },
                { 'id': 'NonInterruptingStart', 'ports': getPorts('NonInterruptingStart'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'NonInterruptingStart' } } },
                { 'id': 'End', 'ports': getPorts('End'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'End' } } },
                { 'id': 'ThrowingIntermediate', 'ports': getPorts('ThrowingIntermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'ThrowingIntermediate' } } },
              ],
            },
            {
              'key': 'gateways',
              'label': 'Gateway Shapes',
              'data': [
                { 'id': 'Complex', 'ports': getPorts('Complex'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Complex' } } },
                { 'id': 'EventBased', 'ports': getPorts('EventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'EventBased' } } },
                { 'id': 'Exclusive', 'ports': getPorts('Exclusive'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Exclusive' } } },
                { 'id': 'ExclusiveEventBased', 'ports': getPorts('ExclusiveEventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'ExclusiveEventBased' } } },
                { 'id': 'Inclusive', 'ports': getPorts('Inclusive'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Inclusive' } } },
                { 'id': 'None', 'ports': getPorts('None'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'None' } } },
                { 'id': 'Parallel', 'ports': getPorts('Parallel'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Parallel' } } },
                { 'id': 'ParallelEventBased', 'ports': getPorts('ParallelEventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'ParallelEventBased' } } },
              ],
            },
            {
              'key': 'activitys',
              'label': 'Activity Shapes',
              'data': [
                { 'id': 'Activity_Task', 'ports': getPorts('Activity_Task'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Activity', 'activity': { 'activity': 'Task' } } },
              ],
            },
            {
              'key': 'messages',
              'label': 'Message Shapes',
              'data': [
                { 'id': 'Message', 'ports': getPorts('Message'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Message' } },
              ],
            },
            {
              'key': 'dataobjects',
              'label': 'DataObject Shapes',
              'data': [
                { 'id': 'DataObject_Input', 'ports': getPorts('DataObject_Input'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'Input' } } },
                { 'id': 'DataObject_None', 'ports': getPorts('DataObject_None'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'None' } } },
                { 'id': 'DataObject_Output', 'ports': getPorts('DataObject_Output'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'Output' } } },
                { 'id': 'DataSource', 'ports': getPorts('DataSource'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataSource' } },
              ],
            },
            {
              'key': 'datasources',
              'label': 'DataSource Shapes',
              'data': [
                { 'id': 'DataSource', 'ports': getPorts('DataSource'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataSource' } },
              ],
            },
            {
              'key': 'groups',
              'label': 'Group Shapes',
              'data': [
                { 'id': 'Group', 'ports': getPorts('Group'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Group' } },
              ],
            },
            {
              'key': 'textannotations',
              'label': 'Text Annotation Shapes',
              'data': [
                { 'id': 'TextAnnotation', 'ports': getPorts('TextAnnotation'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'TextAnnotation' } },
              ],
            },
            {
              'key': 'connectors',
              'label': 'Connectors',
              'data': [
                {
                  'id': 'Sequen_Flow_Normal',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'Arrow' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Normal' },
                },
                {
                  'id': 'Sequen_Flow_Conditional',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'Arrow' },
                  'sourceDecorator': { 'shape': 'Diamond' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Conditional' },
                },
                {
                  'id': 'Association_BiDirectional',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'IndentedArrow' },
                  'sourceDecorator': { 'shape': 'OutdentedArrow' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'BiDirectional' },
                },
                {
                  'id': 'Association_Directional',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'IndentedArrow' },
                  'sourceDecorator': { 'shape': 'None' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'Directional' },
                },
                {
                  'id': 'Association_Default',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'None' },
                  'sourceDecorator': { 'shape': 'None' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'Default' },
                },
                {
                  'id': 'Message_Flow_Default',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'OpenArrow' },
                  'sourceDecorator': { 'shape': 'Circle' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Message', 'message': 'Default' },
                },
                {
                  'id': 'Message_Flow_InitiatingMessage',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'OpenArrow' },
                  'sourceDecorator': { 'shape': 'Circle' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Message', 'message': 'InitiatingMessage' },
                },
              ],
            },
          ],
          'label': 'Work Flow',
          'canvas': {
            'title': {
              'nodes': 'Step detail',
              'connectors': 'Connection detail',
            },
            'form': {
              'basic': {
                'content': {
                  'placeholder': 'Content',
                },
                'description': {
                  'placeholder': 'Note',
                },
              },
            },
          },
          'detail': {
            'title': 'Workflow detail',
            'form': {
              'basic': {
                'code': {
                  'placeholder': 'Code',
                },
                'name': {
                  'placeholder': 'Name',
                },
                'description': {
                  'placeholder': 'Note',
                },
                'button': {
                  'save': 'Save',
                  'draft': 'Draft',
                },
              },
            },
          },
        },
        'form-control': [
          { 'label': 'INPUT', 'value': 'input', 'icon': '' },
          { 'label': 'TEXT-AREA', 'value': 'text-area', 'icon': '' },
          { 'label': 'AUTO-COMPLETE', 'value': 'auto-complete', 'icon': '' },
          { 'label': 'CHECK-BOX', 'value': 'check-box', 'icon': '' },
          { 'label': 'RADIO', 'value': 'radio', 'icon': '' },
          { 'label': 'FILE', 'value': 'file', 'icon': '' },
          { 'label': 'MULTI-SELECT', 'value': 'multi-select', 'icon': '' },
          { 'label': 'COMBO-BOX', 'value': 'combo-box', 'icon': '' },
          { 'label': 'DATE-PICKER', 'value': 'date-picker', 'icon': '' },
          { 'label': 'TIME-PICKER', 'value': 'time-picker', 'icon': '' },
          { 'label': 'LABEL', 'value': 'label', 'icon': '' },
          { 'label': 'EDITOR', 'value': 'editor', 'icon': '' },
        ],
        'header': {
          'account': {
            'items': [
              {
                'value': 'setting',
                'label': 'Setting',
                'icon': (<SettingOutlined />),
              },
              {
                'value': 'log-out',
                'label': 'Log-out',
                'icon': (<LogoutOutlined />),
              },
            ],
          },
          'notification': {
            'tabs': [
              {
                'key': 'work',
                'tab': (
                  <span>
                    <NotificationOutlined />
                    Work
                  </span>
                ),
              },
              {
                'key': 'self',
                'tab': (
                  <span>
                    <SmileOutlined />
                    MySelf
                  </span>
                ),
              },
              {
                'key': 'company',
                'tab': (
                  <span>
                    <ApartmentOutlined />
                    Company
                  </span>
                ),
              },
            ],
            'emptyDescription': (
              <span>
                No notification yet
              </span>
            ),
            'title': 'Notification',
          },
        },
      },
    },
    'jp': {
      'label': '日本語',
      'data': {
        'categories': [
          {
            'label': '自宅',
            'value': 'dashboard',
            'icon': (<HomeOutlined />),
          },
          {
            'label': '口座',
            'value': 'account',
            'icon': (<TeamOutlined />),
          },
          {
            'label': 'お客様',
            'value': 'customer',
            'icon': (<PhoneOutlined />),
          },
          {
            'label': '形',
            'value': 'form',
            'icon': (<ProfileOutlined />),
          },
          {
            'label': 'ワークフロー',
            'value': 'work-flow',
            'icon': (<PartitionOutlined />),
          },
        ],
        'work-flow': {
          'nodes': [
            {
              'key': 'events',
              'label': 'Event Shapes',
              'data': [
                { 'id': 'Start', 'ports': getPorts('Start'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'Start' } } },
                { 'id': 'Intermediate', 'ports': getPorts('Intermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'Intermediate' } } },
                { 'id': 'NonInterruptingIntermediate', 'ports': getPorts('NonInterruptingIntermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'NonInterruptingIntermediate' } } },
                { 'id': 'NonInterruptingStart', 'ports': getPorts('NonInterruptingStart'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'NonInterruptingStart' } } },
                { 'id': 'End', 'ports': getPorts('End'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'End' } } },
                { 'id': 'ThrowingIntermediate', 'ports': getPorts('ThrowingIntermediate'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Event', 'event': { 'event': 'ThrowingIntermediate' } } },
              ],
            },
            {
              'key': 'gateways',
              'label': 'Gateway Shapes',
              'data': [
                { 'id': 'Complex', 'ports': getPorts('Complex'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Complex' } } },
                { 'id': 'EventBased', 'ports': getPorts('EventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'EventBased' } } },
                { 'id': 'Exclusive', 'ports': getPorts('Exclusive'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Exclusive' } } },
                { 'id': 'ExclusiveEventBased', 'ports': getPorts('ExclusiveEventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'ExclusiveEventBased' } } },
                { 'id': 'Inclusive', 'ports': getPorts('Inclusive'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Inclusive' } } },
                { 'id': 'None', 'ports': getPorts('None'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'None' } } },
                { 'id': 'Parallel', 'ports': getPorts('Parallel'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'Parallel' } } },
                { 'id': 'ParallelEventBased', 'ports': getPorts('ParallelEventBased'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Gateway', 'gateway': { 'type': 'ParallelEventBased' } } },
              ],
            },
            {
              'key': 'activitys',
              'label': 'Activity Shapes',
              'data': [
                { 'id': 'Activity_Task', 'ports': getPorts('Activity_Task'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Activity', 'activity': { 'activity': 'Task' } } },
              ],
            },
            {
              'key': 'messages',
              'label': 'Message Shapes',
              'data': [
                { 'id': 'Message', 'ports': getPorts('Message'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Message' } },
              ],
            },
            {
              'key': 'dataobjects',
              'label': 'DataObject Shapes',
              'data': [
                { 'id': 'DataObject_Input', 'ports': getPorts('DataObject_Input'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'Input' } } },
                { 'id': 'DataObject_None', 'ports': getPorts('DataObject_None'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'None' } } },
                { 'id': 'DataObject_Output', 'ports': getPorts('DataObject_Output'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataObject', 'dataObject': { 'type': 'Output' } } },
                { 'id': 'DataSource', 'ports': getPorts('DataSource'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataSource' } },
              ],
            },
            {
              'key': 'datasources',
              'label': 'DataSource Shapes',
              'data': [
                { 'id': 'DataSource', 'ports': getPorts('DataSource'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'DataSource' } },
              ],
            },
            {
              'key': 'groups',
              'label': 'Group Shapes',
              'data': [
                { 'id': 'Group', 'ports': getPorts('Group'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'Group' } },
              ],
            },
            {
              'key': 'textannotations',
              'label': 'Text Annotation Shapes',
              'data': [
                { 'id': 'TextAnnotation', 'ports': getPorts('TextAnnotation'), 'width': 50, 'height': 50, 'shape': { 'type': 'Bpmn', 'shape': 'TextAnnotation' } },
              ],
            },
            {
              'key': 'connectors',
              'label': 'Connectors',
              'data': [
                {
                  'id': 'Sequence_Flow',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'Arrow' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Sequence', 'sequence': 'Normal' },
                },
                {
                  'id': 'Association',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'None' },
                  'sourceDecorator': { 'shape': 'None' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Association', 'association': 'Default' },
                },
                {
                  'id': 'Message_Flow',
                  'type': 'Orthogonal',
                  'sourcePoint': { 'x': 0, 'y': 0 },
                  'targetPoint': { 'x': 40, 'y': 40 },
                  'targetDecorator': { 'shape': 'OpenArrow' },
                  'sourceDecorator': { 'shape': 'Circle' },
                  'style': { 'strokeWidth': 2, 'strokeDashArray': '5.5' },
                  'shape': { 'bpmnFlow': 'Message', 'message': 'Default' },
                },
              ],
            },
          ],
          'label': 'ワークフロー',
          'canvas': {
            'title': {
              'nodes': 'ステップ詳細',
              'connectors': '接続詳細',
            },
            'form': {
              'basic': {
                'content': {
                  'placeholder': 'コンテンツ',
                },
                'description': {
                  'placeholder': '注意',
                },
              },
            },
          },
          'detail': {
            'title': 'ワークフローの詳細',
            'form': {
              'basic': {
                'code': {
                  'placeholder': 'コード',
                },
                'name': {
                  'placeholder': '名前',
                },
                'description': {
                  'placeholder': '注意',
                },
                'button': {
                  'save': '保存する',
                  'draft': 'ドラフト',
                },
              },
            },
          },
        },
        'form-control': [
          { 'label': 'INPUT', value: 'input', icon: '' },
          { 'label': 'TEXT-AREA', value: 'text-area', icon: '' },
          { 'label': 'AUTO-COMPLETE', value: 'auto-complete', icon: '' },
          { 'label': 'CHECK-BOX', value: 'check-box', icon: '' },
          { 'label': 'RADIO', value: 'radio', icon: '' },
          { 'label': 'FILE', value: 'file', icon: '' },
          { 'label': 'MULTI-SELECT', value: 'multi-select', icon: '' },
          { 'label': 'COMBO-BOX', value: 'combo-box', icon: '' },
          { 'label': 'DATE-PICKER', value: 'date-picker', icon: '' },
          { 'label': 'TIME-PICKER', value: 'time-picker', icon: '' },
          { 'label': 'LABEL', value: 'label', icon: '' },
          { 'label': 'EDITOR', value: 'editor', icon: '' },
        ],
        'header': {
          'account': {
            'items': [
              {
                'value': 'setting',
                'label': '設定',
                'icon': (<SettingOutlined />),
              },
              {
                'value': 'log-out',
                'label': 'ログアウト',
                'icon': (<LogoutOutlined />),
              },
            ],
          },
          'notification': {
            'tabs': [
              {
                'key': 'work',
                'tab': (
                  <span>
                    <NotificationOutlined />
                    作業
                  </span>
                ),
              },
              {
                'key': 'self',
                'tab': (
                  <span>
                    <SmileOutlined />
                    私自身
                  </span>
                ),
              },
              {
                'key': 'company',
                'tab': (
                  <span>
                    <ApartmentOutlined />
                    会社
                  </span>
                ),
              },
            ],
            'emptyDescription': (
              <span>
                通知なし
              </span>
            ),
            'title': '通知',
          },
        },
      },
    },
  },
};