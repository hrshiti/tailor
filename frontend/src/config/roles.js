export const ROLES = {
    CUSTOMER: 'customer',
    TAILOR: 'tailor',
    DELIVERY: 'delivery',
    ADMIN: 'admin',
};

export const PERMISSIONS = {
    [ROLES.CUSTOMER]: ['view_products', 'place_order', 'view_my_orders'],
    [ROLES.TAILOR]: ['view_assigned_orders', 'update_order_status', 'upload_portfolio'],
    [ROLES.DELIVERY]: ['view_tasks', 'update_delivery_status'],
    [ROLES.ADMIN]: ['manage_users', 'manage_orders', 'manage_content'],
};
