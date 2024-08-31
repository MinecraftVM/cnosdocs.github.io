# PE集成CE-插件
>本章节将实现把CE-插件加入你的PE，从而实现CE-插件加载的功能
## CE-RAMOS插件加载器
仓库地址：https://github.com/CJA-OS/CE-RAMOS/tree/main/CE-%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8

编译后版本下载链接：https://files.ce-ramos.cn/d/%E4%B8%8B%E8%BD%BD/CE-RAMOS%E6%96%87%E4%BB%B6/CE-%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8/CE-%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8.exe

CE-RAMOS插件加载器为图形化工具，使用命令行时静默运行(通知提示加载开始/完毕)，请参考以下命令行参数帮助实现CE-插件相关功能：(不同版本的CE-RAMOS插件加载器功能可能有变动，请以实际为准，本章节展示的功能为通用的功能)

:::tip 提示：
CE-RAMOS插件加载器可通过使用尚不存在的命令行参数召唤出所有命令参数及解释
:::
```
CE-RAMOS插件加载器
使用：CE-RAMOS插件加载器.exe [选项]

选项：
  main 搜索加载所有CE-插件(仅支持使用1次)(建议设置自启动)
  <CE-插件位置> 加载指定CE-插件
```
