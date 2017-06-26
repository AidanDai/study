# Usage JWT

## Request

### Common Resource Request

需要在路由或者资源服务器层验证用户权限。

#### 同域

同域下　cookie 存储　JWT 验证用户权限

#### 跨域

跨域时　query 带上 JWT 验证用户权限

### API Resource Request

LocalStorage 存储　JWT 验证用户权限

## Authentication

资源数据表实现