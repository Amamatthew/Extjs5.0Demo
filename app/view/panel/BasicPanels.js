/**
 * Created by zjzt on 2015/1/21.
 */
Ext.define('MyApp.view.panel.BasicPanels', {
    extend: 'Ext.Container',
    xtype: 'basic-panels',
    width: 660,
    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 200,
        bodyPadding: 10
    },

    items:[
        {
            html: '我没有标题'
        },
        {
            title: 'Title',
            html: '我有标题'
        },
        {
            title: 'Collapsible',
            collapsible: true,
            html:'我能伸缩'
        },
        {
            title: 'Tools',
            collapsible: true,
            width: 640,
            html: '我有工具条',
            tools: [
                { type:'pin' },
                { type:'refresh' },
                { type:'search' },
                { type:'save' }
            ],
            colspan: 3
        }
    ]
});

